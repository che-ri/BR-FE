import React from 'react';
import { Text, Input, Grid, Button } from "../elements";
import styled from "styled-components";


const Login = (props) => {

    const {history} = props;

    const [id, setId] = React.useState("");
    const [pwd, setPw] = React.useState("");
    const login = (props) => {
        if (id === "" || pwd === "") {
          window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
          return;
        }
        
      };

     const signup = ()=>{
        props.history.push('/signup')
     } 

    return (
        <>
        <Grid width="400px" margin="0px auto" >            
            <Text size="1.5em" align="center">로그인</Text>  
             <Grid wdith="400px" height="70px">         
                <Input type="text" placeholder="아이디" _onChange={(e) => { setId(e.target.value);}}/>
                <Input type="password"  placeholder="비밀번호" _onChange={(e) => { setPw(e.target.value);}}/>
                
            <Button _onClick={() => { login(); }} margin="10px 0px" 
            >로그인</Button>
            </Grid>

            <Grid is_flex height="250px" padding="0px 50px" >
                <A href="https://www.happypointcard.com/page/member-info/find-id-pw-form.spc?findType=id">아이디 찾기</A>
                <A href="https://www.happypointcard.com/page/member-info/find-id-pw-form.spc?findType=pw">&nbsp;비밀번호 찾기</A>
                <Button _onClick={() => { signup(); }}  width="100px"
                >회원가입</Button>
            </Grid>
            
        </Grid>

        </>
        
    );
};

export default Login;

const A = styled.a`
  style="color: black";
  A:link {
    color : black;
  }
  A:hover {
    color : #ff7c98;
  }
`;