export default function TermsOfService() {
    return (
      <div className="policy-page-container">
        <div className="policy-header">
          <h1 className="policy-title">Terms of Service</h1>
          <p className="policy-date">
            Last updated: {new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
  
        <div className="policy-content">
          <div className="policy-section">
            <h2>1. Preamble</h2>
            <p>
              BG Remover Pro (the <strong>"Operator"</strong>, <strong>"We"</strong>, <strong>"Us"</strong>) operates the
              following brands, services, and websites:
            </p>
            <ul className="policy-list">
              <li>BG Remover Pro (bgremoverpro.com), a web-based application for removing backgrounds from photos;</li>
              <li>
                Image Enhancer (imageenhancer.bgremoverpro.com), a web-based application for enhancing image quality;
              </li>
              <li>Photo Editor (photoeditor.bgremoverpro.com), a web-based application for editing photos.</li>
            </ul>
            <p>
              (each, a <strong>"Service"</strong>, or together, the <strong>"Services"</strong>).
            </p>
            <p>
              These Terms of Service apply to all users of the Service(s) (<strong>"User"</strong>).
            </p>
          </div>
  
          <div className="policy-section">
            <h2>2. Definitions</h2>
            <ul className="policy-list">
              <li>
                <strong>"Service"</strong> refers to the BG Remover Pro website operated by our company.
              </li>
              <li>
                <strong>"Terms"</strong> refers to these Terms of Service.
              </li>
              <li>
                <strong>"You"</strong> refers to the individual accessing or using the Service, or the company, or other
                legal entity on behalf of which such individual is accessing or using the Service.
              </li>
              <li>
                <strong>"Content"</strong> refers to images, text, data, or other materials that users upload to our
                Service for processing.
              </li>
            </ul>
          </div>
  
          <div className="policy-section">
            <h2>3. Accounts</h2>
            <p>
              When you create an account with us, you guarantee that the information you provide is accurate, complete,
              and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate
              termination of your account on the Service.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your account and password, including but not
              limited to the restriction of access to your computer and/or account. You agree to accept responsibility for
              any and all activities or actions that occur under your account and/or password.
            </p>
          </div>
  
          <div className="policy-section">
            <h2>4. Service Usage and Limitations</h2>
            <p>
              Our Service allows you to upload and process images to remove backgrounds. You retain all rights to your
              Content. By uploading Content to our Service, you grant us a worldwide, non-exclusive, royalty-free license
              to use, reproduce, and process your Content solely for the purpose of providing our Service to you.
            </p>
            <p>You agree not to use our Service:</p>
            <ul className="policy-list">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>
                To upload any Content that is illegal, harmful, threatening, abusive, harassing, tortious, defamatory,
                vulgar, obscene, libelous, or otherwise objectionable.
              </li>
              <li>To impersonate or attempt to impersonate another person or entity.</li>
              <li>To engage in any activity that interferes with or disrupts the Service.</li>
              <li>
                To attempt to bypass any measures of the Service designed to prevent or restrict access to the Service, or
                any portion of the Service.
              </li>
            </ul>
          </div>
  
          <div className="policy-section">
            <h2>5. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features, and functionality are
              and will remain the exclusive property of BG Remover Pro and its licensors. The Service is protected by
              copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and
              trade dress may not be used in connection with any product or service without the prior written consent of
              BG Remover Pro.
            </p>
          </div>
  
          <div className="policy-section">
            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or
              liability, under our sole discretion, for any reason whatsoever and without limitation, including but not
              limited to a breach of the Terms.
            </p>
            <p>
              If you wish to terminate your account, you may simply discontinue using the Service, or contact us to
              request account deletion.
            </p>
          </div>
  
          <div className="policy-section">
            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall BG Remover Pro, nor its directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="policy-list">
              <li>Your access to or use of or inability to access or use the Service;</li>
              <li>Any conduct or content of any third party on the Service;</li>
              <li>Any content obtained from the Service; and</li>
              <li>Unauthorized access, use or alteration of your transmissions or content.</li>
            </ul>
          </div>
  
          <div className="policy-section">
            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
              material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a
              material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after any revisions become effective, you agree to be bound by
              the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
            </p>
          </div>
  
          <div className="policy-section">
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br />
              Email: support@bgremoverpro.com
            </p>
          </div>
        </div>
      </div>
    )
  }
  