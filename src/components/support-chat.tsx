
"use client";

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { supportChat } from '@/ai/flows/support-chat-flow';
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
}

export function SupportChat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'bot', content: "Hello! I'm Zimmy, your AI support assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showConnectButton, setShowConnectButton] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);
  
  const handleConnectToAgent = () => {
    toast({
        title: "Connecting to Agent",
        description: "Please wait while we connect you to a human support agent. They will be with you shortly.",
    });
    setMessages(prev => [...prev, {id: Date.now().toString(), role: 'bot', content: "An agent will be with you shortly."}]);
    setShowConnectButton(false);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowConnectButton(false);

    try {
      // Format history for the Genkit flow
      const history = messages.map(({ role, content }) => ({
        role: role === 'bot' ? 'model' : 'user',
        content,
      }));

      const response = await supportChat({ history, query: input });
      
      if (response.includes("Would you like me to connect you to a human agent?")) {
        setShowConnectButton(true);
      }

      const botMessage: Message = { id: (Date.now() + 1).toString(), role: 'bot', content: response };
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error("Error calling support chat flow:", error);
      const errorMessage: Message = { id: (Date.now() + 1).toString(), role: 'bot', content: "Sorry, I'm having trouble connecting. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="flex flex-col h-[70vh] w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Chat Support</CardTitle>
        <CardDescription>Get help with your Zimbabwe Landlord and Tenants Network account. Ask me anything!</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map(message => (
              <div key={message.id} className={`flex items-start gap-4 ${message.role === 'user' ? 'justify-end' : ''}`}>
                {message.role === 'bot' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><Bot /></AvatarFallback>
                  </Avatar>
                )}
                <div className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}>
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
                {message.role === 'user' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><User /></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-4">
                <Avatar className="h-8 w-8">
                  <AvatarFallback><Bot /></AvatarFallback>
                </Avatar>
                <div className="rounded-lg px-4 py-2 bg-muted">
                  <Loader2 className="h-5 w-5 animate-spin" />
                </div>
              </div>
            )}
             {showConnectButton && (
                <div className="flex justify-center py-4">
                    <Button onClick={handleConnectToAgent}>Connect to a Human Agent</Button>
                </div>
             )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            id="message"
            placeholder="Type your message..."
            className="flex-1"
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading || showConnectButton}
          />
          <Button type="submit" size="icon" disabled={isLoading || showConnectButton}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
