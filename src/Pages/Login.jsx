import React from 'react'
import {Button, Card, Form, Icon, Input} from "antd";
import {withRouter} from "react-router";

class Login extends React.Component {
    handleSubmit = e => {
        const {history} = this.props;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                history.push('/home');
            }
        });
    };

    render(){
        const {getFieldDecorator} =this.props.form ;
        return(
            <div style={{display:'flex', height:'100%', width:'100%'}}>
                <div style={{height: '100%', width:'60%', backgroundColor:'lightBlue', textAlign:'center'}} >
                    <img style={{width:'40%', height:'auto', marginTop:'14%'}}src="http://clipart-library.com/images/LcdogyLni.png"/>
                </div>
                <div style={{width:'40%', height:'100%'}}>
                    <Card style={{margin:'0px auto', marginTop:'40%', width:'70%'}}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <h2 style={{textAlign:'center', color:'lightBlue'}}>
                                Login
                            </h2>
                            <span>
                                Email
                            </span>
                            <Form.Item>
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Por favor insira seu email' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Email"
                                    />,
                                )}
                            </Form.Item>
                            <span>
                                Senha
                            </span>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Por favor insira sua senha' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Senha"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item style={{textAlign:'end'}}>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        )
    }
}

export default withRouter(Form.create()(Login));