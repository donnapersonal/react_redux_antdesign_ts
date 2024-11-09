import { Button, Form, Input, Result } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Layout from "./Layout";
import { SigninPayload, signin } from "../../store/actions/auth.action";
import { AppState } from "../../store/reducers";
import { AuthState } from "../../store/reducers/auth.reducer";
import { isAuth } from "../../helpers/auth";
import { Jwt } from "../../store/models/auth";

const Signin = () => {
  // 获取 dispatch 方法
  const dispatch = useDispatch();

  // 注册表单提交
  const onFinish = (value: SigninPayload) => {
    // 发送注册请求
    dispatch(signin(value));
  };

  // 1. 获取登录结果
  const auth = useSelector<AppState, AuthState>(state => state.auth);
  
  // 2. 登录失败 显示错误信息
  const showFail = () => {
    if (auth.signin.loaded && !auth.signin.success) {
      return <Result
        status="warning"
        title="登录失败！"
        subTitle={auth.signup.message}
      />
    }
  };

  // 3. 登录成功 根据角色跳转到对应的管理页面
  const redirectToDashboard = () => {
    const auth = isAuth();
    if (auth) {
      const { user: { role } } = auth as Jwt;
      if (role === 0) {
        // 注册用户
        return <Redirect to="/user/dashboard" />;
      } else {
        // 管理员
        return <Redirect to="/admin/dashboard" />;
      }
    }
  };

  const signinForm = () => (
    <Form onFinish={onFinish}>
      <Form.Item name="email" label="邮箱">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input.Password />
      </Form.Item>
      <Form.Item name="email">
        <Button type="primary" htmlType="submit">登录</Button>
      </Form.Item>
    </Form>
  );

  // 4. 处理导航链接 已登录 隐藏 [登录 注册] 显示 [dashboard]
  return (
    <Layout title="登录" subTitle="嘿～立即登录到电商系统吧！">
      { showFail() }
      { redirectToDashboard() }
      { signinForm() }
    </Layout>
  )
}

export default Signin;