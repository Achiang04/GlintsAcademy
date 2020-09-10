class User {
    constructor(props) {
      // props is object, because it is better that way
      let { email, password } = props; // Destruct
      this.email = email;
      this.encryptedPassword = this.#encrypt(password); // We won't save the plain password
    }
  
    // Private method
    #encrypt = (password) => {
      return `pretend-this-is-an-encrypted-version-of-${password}`
    }
  
    // Getter
    #decrypt = () => {
      return this.encryptedPassword.split(`pretend-this-is-an-encrypted-version-of-`)[1];
    }
  
    authenticate(password) {
      return this.#decrypt() === password; // Will return true or false
    }
  }
  
  let Isyana = new User({
    email: "IsyanaKarina@mail.com",
    password: "123456"
  })
  
  const isAuthenticated = Isyana.authenticate("123456");
  console.log(isAuthenticated) // true
  
  