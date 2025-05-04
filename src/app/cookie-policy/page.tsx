export default function CookiePolicy() {
    return (
      <div className="policy-page-container">
        <div className="policy-header">
          <h1 className="policy-title">Cookie Policy</h1>
          <p className="policy-date">
            Last updated: {new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
  
        <div className="policy-content">
          <div className="policy-section">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in
              your web browser and allows the Service or a third-party to recognize you and make your next visit easier
              and the Service more useful to you.
            </p>
            <p>
              Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or
              mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
            </p>
          </div>
  
          <div className="policy-section">
            <h2>2. How BG Remover Pro Uses Cookies</h2>
            <p>When you use and access the Service, we may place a number of cookie files in your web browser.</p>
            <p>We use cookies for the following purposes:</p>
            <ul className="policy-list">
              <li>
                <strong>Essential cookies.</strong> We may use essential cookies to authenticate users and prevent
                fraudulent use of user accounts.
              </li>
              <li>
                <strong>Preferences cookies.</strong> We may use preferences cookies to remember information that changes
                the way the Service behaves or looks, such as the "remember me" functionality of a registered user or a
                user's language preference.
              </li>
              <li>
                <strong>Analytics cookies.</strong> We may use analytics cookies to track information how the Service is
                used so that we can make improvements. We may also use analytics cookies to test new advertisements,
                pages, features or new functionality of the Service to see how our users react to them.
              </li>
              <li>
                <strong>Advertising cookies.</strong> These type of cookies are used to deliver advertisements on and
                through the Service and track the performance of these advertisements. These cookies may also be used to
                enable third-party advertising networks to deliver targeted advertisements that they believe will be of
                most interest to you based upon your activities or interests.
              </li>
            </ul>
          </div>
  
          <div className="policy-section">
            <h2>3. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of
              the Service, deliver advertisements on and through the Service, and so on.
            </p>
          </div>
  
          <div className="policy-section">
            <h2>4. What Are Your Choices Regarding Cookies</h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the
              help pages of your web browser.
            </p>
            <p>
              Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all
              of the features we offer, you may not be able to store your preferences, and some of our pages might not
              display properly.
            </p>
            <ul className="policy-list">
              <li>
                For the Chrome web browser, please visit this page from Google:{" "}
                <a href="https://support.google.com/accounts/answer/32050" className="policy-link">
                  https://support.google.com/accounts/answer/32050
                </a>
              </li>
              <li>
                For the Internet Explorer web browser, please visit this page from Microsoft:{" "}
                <a href="http://support.microsoft.com/kb/278835" className="policy-link">
                  http://support.microsoft.com/kb/278835
                </a>
              </li>
              <li>
                For the Firefox web browser, please visit this page from Mozilla:{" "}
                <a
                  href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                  className="policy-link"
                >
                  https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                </a>
              </li>
              <li>
                For the Safari web browser, please visit this page from Apple:{" "}
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  className="policy-link"
                >
                  https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                </a>
              </li>
            </ul>
            <p>For any other web browser, please visit your web browser's official web pages.</p>
          </div>
  
          <div className="policy-section">
            <h2>5. More Information About Cookies</h2>
            <p>You can learn more about cookies and the following third-party websites:</p>
            <ul className="policy-list">
              <li>
                Network Advertising Initiative:{" "}
                <a href="http://www.networkadvertising.org/" className="policy-link">
                  http://www.networkadvertising.org/
                </a>
              </li>
            </ul>
          </div>
  
          <div className="policy-section">
            <h2>6. Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page.
            </p>
            <p>
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are
              effective when they are posted on this page.
            </p>
          </div>
  
          <div className="policy-section">
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
              <br />
              Email: support@bgremoverpro.com
            </p>
          </div>
        </div>
      </div>
    )
  }
  