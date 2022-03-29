import Axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../../_actions/user_action';



function RegisterPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // STATE를 생성한다.
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Name, setName] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")


  // onchange handler 실제 페이지에서 입력할때마다 처리를 해주는 핸들러 함수를 만든다.

  const onEmailHandler = (event) =>{
      setEmail(event.currentTarget.value);
  }

  const onNameHandler = (event) =>{
    setName(event.currentTarget.value);
  }
  const onPasswordHandler = (event) =>{
    setPassword(event.currentTarget.value);
  }
  const onConfirmPasswordHandler = (event) =>{
    setConfirmPassword(event.currentTarget.value);
  }


  // submit 핸들러 결과 전송전에 어떤걸 보낼지 등등 하기 위해서
  const onSubmitHandler = (event) =>{
    event.preventDefault(); //페이지 새로고침을 막기 위해서 사용

    if(Password !== ConfirmPassword){
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name
    }

    dispatch(registerUser(body))
    .then(response => {
      if(response.payload.success){
        navigate('/login');
      }else{
        alert("Fail to SignUp")
      }
    })

  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>


        <form style={{display:"flex", flexDirection:"column" }}
          onSubmit = {onSubmitHandler}
        >
          <label>Email</label>
          <input type ="email" value={Email} onChange={onEmailHandler} />

          <label>Name</label>
          <input type ="text" value={Name} onChange={onNameHandler} />
          
          <label>Password</label>
          <input type ="password" value={Password} onChange={onPasswordHandler} />
          
          <label>ConfirmPassword</label>
          <input type ="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
          
          <br/>
          <button type='submit'>
            회원가입
          </button>
        
        </form>


      </div>
  )
}

export default RegisterPage