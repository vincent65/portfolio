import React from 'react';
import styled, {keyframes} from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import tcimage from "./tarsadiacapital_logo.jpeg"
import scioly from "../app/images/scioly.jpg"
import sbu from "../app/images/Stony_Brook_University_seal.svg.png"
import tennis from "../app/images/thhstennis.png"
import kotc from "../app/images/kotc.png"

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  imageUrl: StaticImageData;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Tarsadia Capital',
    role: 'Software Engineering Intern',
    period: 'Summer 2023, 2022',
    description: 'Engineered an AI financial statement reader, reducing time spent by 40%. Automated month-end reconciliation tasks, improving efficiency by 60%. Fixed dating and filing inaccuracies in python scripts. Worked with Bloomberg API to pull live financial data.',
    imageUrl: tcimage,
  },
  {
    id: 2,
    company: 'Science Olympiad',
    role: 'Vice President (2023-2024), Build Coordinator (2022-2023)',
    period: 'September 2021 - June 2024',
    description: 'Consistently placed top ten individually at prestigious competitions. Led team of 20 to NY State Inviational. Mentor Team B and C (50 members titak), by helping them with their studying, blueprints, models. Hosted study sessions 3x/week for two hrs after school, compiled hundreds of pages of resources, tests, and problem sets for studying',
    imageUrl: scioly,
  },
  {
    id: 2,
    company: 'Stony Brook University Computer Science & Informatics Research Experience',
    role: 'Researcher',
    period: 'June 2022 - August 2022',
    description: 'Worked under Shuai Mu on DepFast, a framework for building performant and easy to write distributed systems in C++. Optimized DepFast framework by integrating eRPC, reducing request latency by 43% when benchmarked with 10 member nodes and 100 concurrent requests.',
    imageUrl: sbu,
  },
  {
    id: 2,
    company: 'Varsity Tennis',
    role: 'Captain (2024), 1st Doubles (2021-2024)',
    period: 'March 2021 - June 2024',
    description: 'Started on vasity since freshman year in first/second doubles. Placed 3rd twice in NYC Individuals Doubles Tournament. Trained and developed freshman and sophomore players. As Captain, I led my team to their first Mayor\'s cup team final and first semi-final NYC AA playoff appearance.',
    imageUrl: tennis,
  },
  {
    id: 2,
    company: 'King of the Curve',
    role: 'Full Stack Developer',
    period: 'August 2022 - September 2022',
    description: 'Developed and maintained multiple web applications using React and Node.js. Collaborated with UX designers to implement responsive designs and improve user experience.',
    imageUrl: kotc,
  },
  // Add more experiences as needed
];

const ExperienceSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
`;
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;
const ExperienceCard = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
    animation: ${fadeIn} 0.5s ease-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ExperienceContent = styled.div`
  flex: 1;
  padding: 2rem;
`;

const CompanyName = styled.h3`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const Role = styled.h4`
  font-size: 1.4rem;
  color: #34495e;
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  flex: 0 0 300px;
  background-size: cover;
  background-position: center;
  align-items: center;
  padding: 1rem;
  justify-content: center;
`;
const Teetle = styled.h1`
  font-size: 3em;
  text-align: center;
  color: white;
  font-weight: bold
`;
const Wrapper = styled.section`
  padding: 2em;

`;

const imageStyle = {

}

const ExperiencesComponent: React.FC = () => {
  return (
    <ExperienceSection>
        <Wrapper>
    <Teetle>Experiences</Teetle>
        </Wrapper>
      
      {experiences.map((exp) => (
        <ExperienceCard key={exp.id}>
          <ExperienceContent>
            <CompanyName>{exp.company}</CompanyName>
            <Role>{exp.role}</Role>
            <Period>{exp.period}</Period>
            <Description>{exp.description}</Description>
          </ExperienceContent>
          <ImageContainer>
            <Image
            src={exp.imageUrl}
            alt="Vincent's avatar"
            width={250}
            height={250}
            objectFit='contain'
          />
          </ImageContainer>
        </ExperienceCard>
      ))}
    </ExperienceSection>
  );
};

export default ExperiencesComponent;