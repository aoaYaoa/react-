import React,{Component}from 'react'
import {
  Form,
  Icon,
  Input,
  Button,
  message
} from 'antd';
class LoginForm extends Component{

  handleSubmit = (e) => {
    e.preventDefault();
    const {validateFields,resetFields}= this.props.form;
    validateFields((err, values) => {
      if (!err) {
        console.log('获取的数据', values);
      }else{
        resetFields(['password'])
       const eMsg = Object.values(err).reduce((prev,curr)=> prev+curr.errors[0].message+ ' ','')
        message.error(eMsg)
      }
    });
  }
  render(){
    const Item = Form.Item;
    const { getFieldDecorator } = this.props.form;

    return(
      <Form className="login-form" onSubmit={this.handleSubmit}>
        <Item>
          {getFieldDecorator('userName',
            {
            rules: [{ required: true, message:'请输入用户名!' },
              {min:5 , message:'用户名不能少于5位'},
              {max:10,message:'用户名不能超过10位'},
              {pattern:/^[a-zA-Z0-9_]+$/,message:'必须是英文数字和下划线'}
            ],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}

        </Item>
        <Item>
          {getFieldDecorator('password',
            {
            rules: [{ required: true, message: '请输入密码!' },
              {min:6 , message:'密码不能少于6位'},
              {max:16,message:'密码不能超过16位'},
              {pattern:/^[a-zA-Z0-9_]+$/,message:'必须是英文数字和下划线'}],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}

        </Item>
        <Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Item>
      </Form>
    )
  }
}
const WrappedNormalLoginForm = Form.create()(LoginForm);
export default WrappedNormalLoginForm;
