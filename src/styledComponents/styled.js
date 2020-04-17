import styled from "styled-components";

export const APPContainer = styled.div`
  background-color: #222831;
  min-height: 500px;
  width: 400px;
  margin: 40px auto;
  border-radius: 10px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledForm = styled.form`
  input {
    background-color: #f2a365;
    border: 0;
    width: 340px;
    height: 50px;
    padding: 0 20px;
    margin: 10px;
    font-size: 18px;
    border-radius: 10px;
    color: #ececec;
  }
  input::placeholder {
    color: rgba(239, 243, 198, 0.5);
  }
  input:focus,
  button:focus {
    outline: none;
  }
  button {
    height: 44px;
    width: 100px;
    border-radius: 5px;
    border: 0;
    background-color: #f2a365;
    cursor: pointer;
    font-weight: bolder;
    color: #ececec;
  }
`;

export const StyledUL = styled.ul`
  font-size: 31px;
  color: purple;
  margin-top: 15px;
`;

export const StyledLI = styled.li`
  list-style-type: none;
  margin: ${(props) => (props.isEmpty ? "100px 10px" : "0 0 0 -20px")};
  font-size: ${(props) => (props.isEmpty ? "2rem" : "")};
  word-wrap: break-word;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
