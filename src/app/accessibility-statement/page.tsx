
import { UniversalAccess } from "lucide-react";

export default function AccessibilityStatementPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 md:py-16">
      <div className="space-y-6 prose prose-lg dark:prose-invert max-w-none">
        <div className="text-center">
            <UniversalAccess className="h-16 w-16 mx-auto text-primary" />
            <h1 className="font-headline !mt-4">Accessibility Statement</h1>
        </div>
        
        <p className="lead text-muted-foreground text-center">We are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
        
        <h2>Conformance Status</h2>
        <p>The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Zimbabwe Landlord and Tenants Network is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.</p>
        
        <h2>Feedback</h2>
        <p>We welcome your feedback on the accessibility of Zimbabwe Landlord and Tenants Network. Please let us know if you encounter accessibility barriers:</p>
        <ul>
            <li>Phone: <a href="tel:+263771501737">+263 771 501 737</a></li>
            <li>E-mail: <a href="mailto:support@truststamp.co.zw">support@truststamp.co.zw</a></li>
            <li>Postal Address: 123 Fife Avenue, Harare, Zimbabwe</li>
        </ul>
        <p>We try to respond to feedback within 5 business days.</p>
        
        <h2>Technical Specifications</h2>
        <p>Accessibility of Zimbabwe Landlord and Tenants Network relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:</p>
        <ul>
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        <p>These technologies are relied upon for conformance with the accessibility standards used.</p>
        
        <h2>Limitations and Alternatives</h2>
        <p>Despite our best efforts to ensure accessibility of Zimbabwe Landlord and Tenants Network, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.</p>
        <ul>
            <li><strong>Third-party content:</strong> Content from external websites or services may not be fully accessible. We cannot ensure the accessibility of third-party content, but we encourage our partners to provide accessible content.</li>
            <li><strong>Complex visualisations:</strong> Some of our charts and data visualisations may be difficult to interpret for users with visual impairments. We are working on providing alternative textual descriptions for all data visualisations.</li>
        </ul>
        
        <h2>Assessment Approach</h2>
        <p>Zimbabwe Landlord and Tenants Network assessed the accessibility of our website by the following approaches:</p>
        <ul>
            <li>Self-evaluation</li>
            <li>Regular automated testing during development</li>
        </ul>
        <p>This statement was created on 1 September 2024.</p>
      </div>
    </div>
  );
}
