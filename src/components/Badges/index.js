import React from 'react';
import styled from 'styled-components'

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 40px;
margin-bottom:20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Badges = () => {
    return (
        <>
            <Title>Badges and Certifications</Title>
            <div class="flex space-x=16 overflow-hidden group "  >
                <div class="flex space-x=16 animate-loop-scroll group-hover:paused">
                    <img loading="lazy" src="ux.png" height="100px" width="300px" class="max-w-none m-11" alt="" />
                    <img loading="lazy" src="genai.png" height="50px" width="600px" class="max-w-none" alt="" />
                    <img loading="lazy" src="bigdata2.png" height="50px" width="400px" class="max-w-none" alt="" />
                    <img loading="lazy" src="oracleai.png" height="50px" width="600px" class="max-w-none" alt="" />
                    <img loading="lazy" src="gcp1.png" height="70px"  width="400px" class="max-w-none m-10" alt="" />
                    <img loading="lazy" src="gcp2.png" height="70px"  width="400px" class="max-w-none m-10" alt="" />
                    <img loading="lazy" src="gcp3.png" height="70px"  width="400px"class="max-w-none m-10" alt="" />
                    <img loading="lazy" src="gcp4.png" height="70px"  width="400px" class="max-w-none m-10" alt="" />
                    <img loading="lazy" src="azureai.png" height="70px" width="600px" class="max-w-none m-11" alt="" />
                </div>
                <div class="flex space-x=16 animate-loop-scroll" aria-hidden="true">
                    <img loading="lazy" src="ux.png" height="100px" width="300px" class="max-w-none" alt="" />
                    <img loading="lazy" src="genai.png" height="50px" width="600px" class="max-w-none" alt="" />
                    <img loading="lazy" src="bigdata2.png" height="50px" width="400px" class="max-w-none" alt="" />
                    <img loading="lazy" src="oracleai.png" height="50px" width="600px" class="max-w-none" alt="" />
                    <img loading="lazy" src="gcp1.png" class="max-w-none m-10" height="70px"  width="400px"  alt="" />
                    <img loading="lazy" src="gcp2.png" class="max-w-none m-10" height="70px"  width="400px" alt="" />
                    <img loading="lazy" src="gcp3.png" class="max-w-none m-10" height="70px"  width="400px" alt="" />
                    <img loading="lazy" src="gcp4.png" class="max-w-none m-10" height="70px"  width="400px" alt="" />
                    <img loading="lazy" src="azureai.png" height="70px" width="600px" class="max-w-none m-11" alt="" />
                </div>
            </div>
        </>
    );
};

export default Badges;
