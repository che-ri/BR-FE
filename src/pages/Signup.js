import React, {Link} from 'react';
import { Text, Input, Grid, Button } from "../elements";


const Signup = () => {

    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [nickName, setNickname] = React.useState("");


    const signup = (props) => {
        console.log("회원가입 버튼 클릭"); 
        if (id === "" || pwd === "" || nickName==="") {
            window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
            return;
        }
              
    };
    return (
        <>
        <Grid width="400px" margin="0px auto" >            
            <Text size="1.5em" align="center">회원가입</Text>  
             <Grid width="400px">  
                <Grid margin="0 0 20px 0">       
                <Input  type="text" placeholder="아이디" _onChange={(e) => { setId(e.target.value);}}/>
                </Grid>
                <Grid is_flex margin="0 0 20px 0">
                    <Input type="text" placeholder="닉네임" _onChange={(e) => { setNickname(e.target.value);}}/>
                </Grid>

                <Grid margin="0 0 20px 0">
                <Input type="password"  placeholder="비밀번호" _onChange={(e) => { setPwd(e.target.value);}}/>            
                </Grid>
                <Grid margin="0 0 20px 0">
                <Input type="password"  placeholder="비밀번호 확인" _onChange={(e) => { setPwd(e.target.value);}}/>
                </Grid>

                <Button _onClick={() => { signup(); }} radius="20px"
            >회원가입</Button>
            </Grid>

        </Grid>


        </>
        
    );
};

export default Signup;
