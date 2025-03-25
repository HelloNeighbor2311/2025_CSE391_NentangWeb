function SignIn() {
    return (
        <div className="sign-in-container">
            <form className="sign-in-form">
                <h1>Đăng nhập</h1>
                <div>
                    <label htmlFor="username">Tên đăng nhập</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Đăng nhập</button>
            </form> 
        </div>
    );
}

export default SignIn;