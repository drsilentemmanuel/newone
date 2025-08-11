
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";

export default function DisputeDataPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">Dispute Data</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Submit a New Dispute</CardTitle>
                    <CardDescription>If you believe there is an error on your Trust Stamp profile, please let us know.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="dispute-item">What information is incorrect?</Label>
                         <Select>
                            <SelectTrigger id="dispute-item">
                                <SelectValue placeholder="Select an item from your report" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="payment-history">Payment History</SelectItem>
                                <SelectItem value="rental-history">Rental History</SelectItem>
                                <SelectItem value="personal-details">Personal Details</SelectItem>
                                <SelectItem value="public-records">Public Records</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="explanation">Please explain the issue</Label>
                        <Textarea id="explanation" placeholder="Clearly describe the inaccuracy and provide the correct information..." rows={6} />
                    </div>
                     <div className="space-y-2">
                        <Label>Upload Supporting Documents (Optional)</Label>
                        <div className="flex items-center justify-center w-full">
                            <Label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                                    <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-muted-foreground">PDF, PNG, JPG (MAX. 5MB)</p>
                                </div>
                                <Input id="dropzone-file" type="file" className="hidden" />
                            </Label>
                        </div> 
                    </div>
                    <Button>Submit Dispute</Button>
                </CardContent>
            </Card>
        </div>
    );
}
