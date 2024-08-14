import { Heading1 } from 'lucide-react';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface Honor {
  id: number;
  title: string;
  description: string;
  year: string;
}

const honors: Honor[] = [
    
    { id: 1, title: 'Science Olympiad', description: 'Competed in various physics and engineering events at Science Olympiad competitions. Earned numerous top five placements at NYC Regionals, Columbia University SO, NY State, Yale SO, and more', year: "2022, 2023, 2024" },
  { id: 1, title: 'Congressional App Challenge Winner', description: 'Created an app that blurs your screen when you start slouching', year: "2023" },
  { id: 2, title: 'National History Day NYC Senior Paper 2nd Place', description: 'Wrote a 10,000 word research report on Silicon Valley as a frontier in history', year: "2023" },
  { id: 3, title: 'Harvard International Review Writing Contest Finalist', description: 'Received an award of outstanding content for my article titled "Turmoil Boils as Plans to Fix the Sahel Spoil"', year: "2022" },
  { id: 3, title: 'National Merit Finalist', description: 'SAT: 1580, PSAT: 1480', year: "2024" },
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HonorsSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const HonorsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const HonorItem = styled.li`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const HonorTitle = styled.h3`
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const HonorDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
`;

const HonorYear = styled.span`
  font-size: 0.9rem;
  color: #95a5a6;
  font-weight: bold;
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

const HonorsComponent: React.FC = () => {
  const [hoveredHonor, setHoveredHonor] = useState<number | null>(null);

  return (
    <HonorsSection>
      <Wrapper>
        <Teetle>
            Honors & Awards
        </Teetle>
      </Wrapper>
      <HonorsList>
        {honors.map((honor) => (
          <HonorItem
            key={honor.id}
            onMouseEnter={() => setHoveredHonor(honor.id)}
            onMouseLeave={() => setHoveredHonor(null)}
            style={{
              transform: hoveredHonor === honor.id ? 'translateY(-5px)' : 'none',
              boxShadow: hoveredHonor === honor.id ? '0 5px 15px rgba(0, 0, 0, 0.1)' : 'none',
            }}
          >
            <HonorTitle>{honor.title}</HonorTitle>
            <HonorDescription>{honor.description}</HonorDescription>
            <HonorYear>{honor.year}</HonorYear>
          </HonorItem>
        ))}
      </HonorsList>
    </HonorsSection>
  );
};

export default HonorsComponent;