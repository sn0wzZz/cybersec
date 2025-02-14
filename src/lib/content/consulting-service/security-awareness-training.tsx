import Container from '@/components/container'
import ContentBox from '@/components/content-box'
import CTA from '@/components/cta'

export default function SecurityAwarenessTraining() {
  return (
    <Container global>
      <ContentBox
        caption='Security Awareness Trainings'
        title='Cyber security trainings'
      >
        <p>
          The trainings offered by our company are conducted by proven industry
          experts. The purpose of such cybersecurity trainings is mainly to
          improve the digital culture of your employees, as well as to
          understand what are the dangers in the digital world that they need to
          protect themselves from. Trainings are conducted both in-person and
          online in a dedicated online training platform. Depending on the
          client’s needs, the training sessions last between 6 and 8
          astronomical hours. Upon request, a theory exam can be included to
          consolidate the knowledge. At the completion of the training, each
          employee receives a personal certificate.
        </p>

      </ContentBox>

      <ContentBox
        caption='Security Awareness Trainings'
        title='Why do you need cybersecurity training?'
      >
        <ul>
          <li>
            Cybercrime will cost over $6 trillion to industries worldwide in
            2021.
          </li>
          <li>85% of data leaks are due to human error.</li>
          <li>
            43% of employees are &apos;very&apos; or &apos;fairly&apos; sure
            they have made a mistake at work with security implications.
          </li>
          <li>
            80% of organizations say cyber security training has reduced their
            staff&apos;s vulnerability to hacker attacks.
          </li>
          <li>3 billion fake emails are sent every day.</li>
          <li>36% of data leaks are due to phishing.</li>
        </ul>
      </ContentBox>

      <ContentBox
        caption='Security Awareness Trainings'
        title='Table of content'
      >
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='md:w-1/2'>
            <p>
              <strong>1.</strong> An introduction to cybersecurity and why it is
              so important for every organization
            </p>
            <p>
              <strong>2.</strong> Information leakage process
            </p>
            <p>
              <strong>3.</strong> Practical defence
            </p>

            <p>
              <strong>3.1.1</strong> Passwords
              <br />
              <strong>3.1.2</strong> Password managers
              <br />
              <strong>3.1.3</strong> Multifactor authentication
              <br />
              <strong>3.1.4</strong> Expired passwords
              <br />
              <strong>3.1.5</strong> Passwords – Practical training
            </p>

            <p>
              <strong>3.2.1</strong> Social engineering
              <br />
              <strong>3.2.2</strong> Social engineering techniques
              <br />
              <strong>3.2.3</strong> Phishing introduction
              <br />
              <strong>3.2.4</strong> Types of phishing
              <br />
              <strong>3.2.5</strong> Examples of phishing
              <br />
              <strong>3.2.6</strong> Identifying phishing and fake sites –
              Practical training
            </p>

            <p>
              <strong>3.3.1</strong> Viruses
              <br />
              <strong>3.3.2</strong> Types of malware
              <br />
              <strong>3.3.3</strong> Purpose of viruses
              <br />
              <strong>3.3.4</strong> Distribution of viruses
            </p>
          </div>

          <div className='md:w-1/2'>
            <p>
              <strong>3.3.5</strong> Protection against viruses
              <br />
              <strong>3.3.6</strong> How to know that your device is infected
              <br />
              <strong>3.3.7</strong> Malware Scanning – Practical training
            </p>

            <p>
              <strong>3.4.1</strong> Physical Security Introduction
              <br />
              <strong>3.4.2</strong> Tailgating
              <br />
              <strong>3.4.3</strong> Physical security addition
              <br />
              <strong>3.4.4</strong> USB attacks
              <br />
              <strong>3.4.5</strong> USB attacks – Demo
            </p>

            <p>
              <strong>3.5.1</strong> Other threats
              <br />
              <strong>3.5.2</strong> Shoulder surfing
              <br />
              <strong>3.5.3</strong> MITM
              <br />
              <strong>3.5.4</strong> Old Software
              <br />
              <strong>3.5.5</strong> Dumpster diving
              <br />
              <strong>3.5.6</strong> Mobile security
              <br />
              <strong>3.5.7</strong> Other threats – Demo
            </p>

            <p>
              <strong>4.</strong> What to do if we are already hacked
            </p>
          </div>
       
        </div>
      </ContentBox>

      <CTA />
    </Container>
  )
}
