import Container from '@/components/container';
import ContentBox from '@/components/content-box';
import code from '../../../../public/services/articles/code.png'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    title: 'Malware, Ransomware and extortion',
    description:
      'No one wants to be held hostage, and there is nothing worse than having your business shut down by a cybercriminal who wants tens of thousands of dollars in cryptocurrency. If you are affected by ransomware, our team of experts will act quickly and efficiently to mitigate the threat, restore order to your IT infrastructure, and make every effort to recover your information so that you can continue to operate normally. CYBERONE has extensive experience with dozens of real ransomware attacks every year. We are here to protect you and help you recover. When you engage CYBERONE, our expert team will help you make critical business decisions. We will work quickly to restore your assets to normal, address your issues and help you avoid business and reputational damage.',
  },
  {
    title: 'Compromised email server or mail account',
    description:
      'Corporate email accounts contain all kinds of sensitive data and are a priority target for cybercriminals. Whether they want to steal data, commit fraud, or have other malicious intent, compromising business email can be particularly damaging to your organization and reputation. When you engage CYBERONE to solve your IT problems, our experts work to quickly restore affected assets to normal, address vulnerabilities on your email server or account, and help you understand the full scope of the attack and affected assets, as well as the consequences. This analysis will help you make critical decisions that will protect your reputation and critical information.',
  },
  {
    title: 'Online threats to business',
    description:
      'We excel where others fail when it comes to responding to advanced cyber threats affecting your business. If you are attacked by more experienced malicious actors, CYBERONE takes swift action to understand the nature of the threat and take proactive measures to mitigate the damage accordingly. As cybercriminals continue to innovate, attacks on web applications, e-commerce fraud, and credit card theft are becoming more common. CYBERONE experts can respond to even the most advanced attacks to prevent continued malicious activity and analyze causes, impact and consequences.',
  },
  {
    title: 'Insider threats from (former) employees',
    description:
      "Insider threats pose one of the biggest cybersecurity risks to your organization. They pose as trusted employees, reliable suppliers, and hard-working contractors who will use their privileged access to cause serious harm. Whether it's current or former employees and partners, the risk of malicious activity is equally high. We know how to investigate such cyber incidents and gather enough evidence and facts to claim your rights before the authorities and court. CYBERONE experts can work for you to mitigate the risk of malicious insider actions and gather sufficient facts and evidence about the potential theft of data, corporate secrets, intellectual property or other damages.",
  },
]


export default function DataBreachInvestigation() {
  return (
    <Container global className='mb-24'>
      <ContentBox
        caption='When the worst happens you can count on us'
        title='Data Breach Investigation'
        image={code}
      >
        <p>
          During a breach in your systems, it is important to act quickly to
          contain the threat and its risks, and to minimize the impact by
          getting to the root cause. However, ignoring obvious procedures can
          limit your ability to help legal or government authorities investigate
          and analyze the threat. Our digital forensics professionals will work
          closely with your company’s crisis communications team to provide the
          public and customers with up-to-date information on any personal
          information that may have been compromised, as well as information on
          the steps being taken to protecting customers against future
          incidents. <br /> <br /> As the main steps of cyber incident
          investigation activities, our specialists will help you uncover any
          information related to the causes, facts and consequences of a cyber
          incident. At the end of each investigation, a full report is provided
          to the service, which includes all facts and circumstances,
          photographic material, recommendations, conclusions and analyses.
        </p>
      </ContentBox>

      <ContentBox
        caption='Benefits of our solution'
        title='Benefits and opportunities'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8'>
          {benefits.map((card, i) => (
            <Card key={i} >
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentBox>
    </Container>
  )
}