import LegalPage from '../components/LegalPage.jsx'

export default function PrivacyPolicy() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="August 12, 2026">
      <p>
        This Privacy Policy explains how kinzamohsin.com ("this site," "we," "us") handles information
        in connection with your visit, and in connection with any features that connect to Meta
        products such as Facebook Login or the Instagram API. This site is operated by Kinza Mohsin,
        an independent food content creator based in Lahore, Pakistan.
      </p>

      <h2>Who this policy covers</h2>
      <p>
        This site is a personal portfolio and does not require visitors to log in, create an account,
        or submit personal information to browse it. Where a feature does connect to a Meta product
        (for example, to display up-to-date Instagram statistics), the sections below explain what
        that involves.
      </p>

      <h2>Information we collect</h2>
      <p>We collect the following, and no more:</p>
      <ul>
        <li>
          <strong>Standard visit data.</strong> Like most websites, our hosting provider automatically
          logs basic technical information (such as IP address, browser type, and pages requested) for
          security and reliability purposes. This site does not itself set tracking or advertising
          cookies.
        </li>
        <li>
          <strong>Instagram account data (if connected).</strong> If this site integrates with the
          Instagram API or Facebook Login, the connection is authorized directly by Kinza Mohsin, on
          Kinza Mohsin's own Instagram Business/Creator account — not by site visitors. The data
          retrieved is limited to public-facing account and content insights (for example, follower
          count, reach, and views on published posts), used solely to display up-to-date stats on this
          site. We do not use Meta Login to collect data about visitors.
        </li>
        <li>
          <strong>Messages you send us.</strong> If you contact Kinza Mohsin via the WhatsApp or
          Instagram links on this site, that conversation happens on WhatsApp's or Instagram's own
          platform and is governed by their respective privacy policies, not this one.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To display accurate, current reach and engagement statistics on this portfolio.</li>
        <li>To keep the site secure and functioning correctly.</li>
        <li>To respond to collaboration or business inquiries sent through the contact links.</li>
      </ul>
      <p>We do not sell, rent, or share information with third parties for advertising purposes.</p>

      <h2>Data retention</h2>
      <p>
        Instagram account insights displayed on this site are refreshed periodically and are not
        stored as a historical personal-data archive beyond what is needed to display current stats.
        Standard hosting logs are retained only as long as our hosting provider's default retention
        period.
      </p>

      <h2>Your rights</h2>
      <p>
        If you believe any information related to you has been collected in connection with this site
        and would like it corrected or deleted, see our{' '}
        <a href="/data-deletion">Data Deletion Instructions</a> page, or contact us using the details
        below.
      </p>

      <h2>Children's privacy</h2>
      <p>This site is not directed at children under 13, and we do not knowingly collect data from them.</p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The "Last updated" date above reflects the most
        recent revision.
      </p>

      <div className="legal-contact">
        <h2 style={{ marginTop: 0 }}>Contact us</h2>
        <p>For any privacy questions or requests, reach Kinza Mohsin directly:</p>
        <p>
          WhatsApp:{' '}
          <a href="https://wa.me/923297462916" target="_blank" rel="noopener">
            +92 329 7462916
          </a>
          <br />
          Instagram:{' '}
          <a href="https://instagram.com/kinza__mohsin" target="_blank" rel="noopener">
            @kinza__mohsin
          </a>
        </p>
      </div>
    </LegalPage>
  )
}
