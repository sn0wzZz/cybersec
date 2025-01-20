import Container from '@/components/container';
import ContentBox from '@/components/content-box';

import pcLock from '../../../../public/services/articles/pc-lock.png'
import files from '../../../../public/services/articles/files.png'
import network from '../../../../public/services/articles/network.png'



export default function InformationSecurityPolicies() {
  return (
    <Container global className='gap-[250px]'>
      <ContentBox
        caption=' Basic steps to better security'
        title='Information Security Policies'
        image={pcLock}
      >
        Cybersecurity is an important issue for both the IT department and
        executives and directors. However, security should be a concern for
        every employee in an organization, not just IT professionals and top
        managers. One effective way to educate employees about the importance of
        security is through cybersecurity policies that explain each employee’s
        responsibilities for protecting IT systems and data. A cybersecurity
        policy sets the standards of behavior for a variety of activities within
        an organization. <br /> <br /> Cybersecurity policies are important
        because cyberattacks and data breaches are terribly expensive. At the
        same time, employees are often the weak links in an organization’s
        security. Employees share passwords, click on malicious URLs and
        attachments, use unapproved cloud applications, and ignore the
        encryption of sensitive files. <br /> <br /> These types of policies are
        especially critical in public companies or organizations that operate in
        highly regulated industries such as healthcare, finance, or insurance.
        These organizations are at risk of heavy fines if their security
        procedures are deemed inadequate. <br /> <br /> Cybersecurity policies
        are also critical to an organization’s public image and trust.
        Customers, partners, shareholders and prospective employees want
        evidence that the organization can protect their sensitive data. Without
        a cybersecurity policy, an organization may not be able to provide such
        evidence.
      </ContentBox>

      <ContentBox
        caption='Basic steps to better security'
        title='Setting a cybersecurity policy'
        image={files}
      >
        <p>
          Cybersecurity procedures explain the rules for how employees,
          consultants, partners, board members, and other end users access
          online applications and Internet resources, send data over networks,
          and otherwise practice responsible security. Typically, the first part
          of a cybersecurity policy describes the overall security expectations,
          roles, and responsibilities within the organization. Stakeholders
          include external consultants, IT staff, finance staff, etc. This is
          the “roles and responsibilities” or “information responsibility and
          accountability” section of the policy.
        </p>
      </ContentBox>

      <ContentBox
        caption='Basic steps to better security'
        title='Setting a cybersecurity policy'
        image={network}
      >
        <p>
          CYBERONE can prepare any policies and procedures for your company’s
          information security, relying on the extensive experience of our
          team. Some of the topics that most companies cover in their
          information security policy package are:
        </p>
        <br />
        <ul>
          <li>Acceptable use of information systems</li>
          <li>Account Management</li>
          <li>Anti-virus protection software</li>
          <li>Acceptable use of personal devices (BYOD)</li>
          <li>Acceptable use of portable devices</li>
          <li>A safe workplace policy</li>
          <li>Secure use of email communication</li>
          <li>Firewall policy</li>
          <li>Secure destruction of hardware and other IT assets</li>
          <li>Security incident management</li>
          <li>Internet Usage Policy</li>
          <li>Management of log data and logs</li>
          <li>Protection of personal and confidential data</li>
          <li>Network security and acceptable use of VPN systems</li>
          <li>Acceptable use of personal devices and their security</li>
          <li>Password Security Policy</li>
          <li>Management of updates and security upgrades</li>
          <li>Physical access control</li>
          <li>Use of cloud services</li>
          <li>Server Security management</li>
          <li>Systems monitoring and auditing</li>
          <li>Vulnerability Management</li>
          <li>Secure website management</li>
          <li>Secure workstation management</li>
        </ul>
      </ContentBox>
    </Container>
  )
}