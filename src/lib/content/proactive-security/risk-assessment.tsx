import Container from '@/components/container'
import ContentBox from '@/components/content-box'
import bug from '../../../../public/services/articles/bug.png'

export default function RiskAssessment() {
  return (
    <Container global className='mb-64'>
      <ContentBox
        caption='Cyber Incident Risk Assessment'
        title='Risk Assessment'
        image={bug}
      >
        <p>
          CyberSec can perform a full cyber security risk assessment of your
          company, based on hundreds of risk factors, technical questions,
          checks and other activities performed by our team. We can also perform
          a risk assessment based on your company’s public infrastructure, which
          is subject to attacks on a daily basis by malicious individuals. The
          service is carried out by our proven cyber security specialists and at
          the end of each assessment a formal report is issued outlining all
          findings, recommendations and an impact assessment. The main purpose
          of a cyber risk assessment is to keep stakeholders informed and
          recommend appropriate actions against identified risks. Risk
          assessments also provide a summary to help executives and directors
          make informed decisions about their company’s security. The
          information security risk assessment process is concerned with
          answering the following questions:
        </p>
        <br />
        <ul>
          <li>What are our organization&apos;s most important IT assets?</li>
          <li>
            What cyber incident would have a major impact on our business,
            whether from malware, cyber attack, or human error?
          </li>
          <li>
            Can all sources of threat be identified in the event of an incident?
          </li>
          <li>
            What is the level of potential impact of each identified threat?
          </li>
          <li>What are the internal and external threats?</li>
          <li>What is the impact if these vulnerabilities are exploited?</li>
          <li>What is the likelihood of exploitation?</li>
          <li>
            What cyber-attacks, cyber-threats, or security incidents could
            affect the ability of the business to function?
          </li>
          <li>
            What is the level of risk that my organization can take without
            problems?
          </li>
        </ul>
      </ContentBox>

      <ContentBox
        caption='Cyber Incident Risk Assessment'
        title='Why carry out a risk assessment?'
      >
        <p>
          There are a number of reasons why you might want to conduct a cyber
          risk assessment, and several reasons why you absolutely should.
        </p>
        <br />
        <br />
        <h3>Long term cost reduction</h3>
        <br /> <br />
        <p>
          Identifying potential threats and vulnerabilities and then working to
          mitigate them has the potential to prevent or reduce security
          incidents, saving your organization money and/or reputational damage
          in the long run.
        </p>
        <br />
        <br />
        <h3>
          Provides a cybersecurity risk assessment basis for future assessments
        </h3>
        <br /> <br />
        <p>
          Cyber ​​risk assessments are not one of the processes, you need to
          continuously update them, if you make a good first move you will
          ensure repeatable processes even with staff turnover.
        </p>
        <br />
        <br />
        <h3>Better organizational knowledge</h3>
        <br /> <br />
        <p>
          Knowing organizational problems and shortcomings gives you a clear
          idea of ​​where your organization needs to improve.
        </p>
        <br />
        <br />
        <h3>Avoiding security incidents</h3>
        <br /> <br />
        <p>
          Any security incident can have a huge financial and reputational
          impact on any organization, regardless of its size.
        </p>
        <br />
        <br />
        <h3>Data loss</h3>
        <br /> <br />
        <p>
          The theft of trade secrets, code or other key information assets could
          mean you lose business to competitors. Additionally, cyber risk
          assessments are an integral part of any organization’s IT risk
          management and broader risk management strategy.
        </p>
      </ContentBox>
    </Container>
  )
}
