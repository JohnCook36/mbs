import styled from "@emotion/styled";
/*import {
    Title as TitleUI,
    Description as DescriptionUI,
    Button as ButtonUI,
    Input as InputUI,
} from '../../components';*/

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 372px;
  padding-top: 80px;
`;

export const TitleComponent = styled.div``;

export const Title = styled.title``;

export const GoggleButton = styled.button`
  margin-top: 50px;
`;

export const ButtonTitle = styled.span``;
export const Description = styled.p`
  margin-top: 32px;
  text-align: center;
`;

export const InputComponents = styled.form`
  margin-top: 32px;
`;
export const InputComponentEmail = styled.div``;

export const InputComponentPassword = styled.div`
  margin-top: 24px;
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 1.25;
`;

export const HelpPassword = styled.a`
  //font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  color: gray;
  cursor: pointer;
  :hover {
    //color: var(--color-bic-gray-7);
  }
`;

export const ButtonLog = styled.button`
  margin-top: 24px;
`;
