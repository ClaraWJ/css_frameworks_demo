import { useState } from "react";

export default function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `The following sign-in attempt was made: Email=${email}, Password=${password}`
    );
    setPassword("");
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div
      id="container"
      className="flex flex-col bg-gray-100 h-full"
    >
      <img
        src="/pizzafox.png"
        style={{
          //alignSelf: "flex-end",
          //margin: "1em 1em 4em 1em"
        }}
        className="w-[40%] self-end mt-[1em] mb-[4em] mr-[1em] ml-[1em]"
      />
      <form
        style={{
          //width: "60%",
          //display: "flex",
          //flexDirection: "column",
          //alignSelf: "center",
        }}
        className="w-[60%] flex flex-col self-center"
        onSubmit={handleSubmit}
      >
        <h1
          style={{
            //fontSize: "3rem",
            //lineHeight: "1",
          }}
          className="text-5xl"
        >
          Sign in
        </h1>
        <p
          style={{
            //fontSize: "1rem",
            //lineHeight: "2rem",
            //color: "#475569",
          }}
          className="text-base text-gray-500 mt-2"
        >
          Please sign in to continue
        </p>
        <div
          id="email-input-container"
          style={{
            //display: "flex",
            //flexDirection: "column",
            //marginTop: "1em",
            //borderRadius: "0.75rem",
            //borderWidth: "1px",
            //borderColor: "black",
            //backgroundColor: "white",
            filter:
              "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
          }}
          className="flex flex-col mt-[1em] borderradius-[0.75rem] border-[1px] border-black rounded-2xl"
        >
          <label
            id="email-label"
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
              width: "100%",
              margin: "0.3em 0 0 0.3em",
            }}
            className=""
            htmlFor="email-input"
          >
            ✉️ Email
          </label>
          <input
            id="email-input"
            style={{
              fontSize: "1.5rem",
              lineHeight: "2rem",
              display: "inline",
              padding: "0 0 0.3em 0.3em",
              backgroundColor: "transparent",
              borderBottomRightRadius: "0.75rem",
              borderBottomLeftRadius: "0.75rem",
            }}
            className=""
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="swagger@itu.dk"
          />
        </div>
        <div
          id="password-input-container"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "1em",
            borderWidth: "1px",
            borderTopColor: "#f8fafc",
            borderLeftColor: "#f8fafc",
            borderRightColor: "#f8fafc",
            borderBottomColor: "black",
          }}
          className=""
        >
          <label
            id="password-label"
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
              width: "100%",
              margin: "0.3em 0 0 0.3em",
            }}
            className=""
            htmlFor="password-input"
          >
            🔒 Password
          </label>
          <input
            id="password-input"
            style={{
              fontSize: "1.5rem",
              lineHeight: "2rem",
              padding: "0 0 0.3em 0.3em",
              backgroundColor: "white",
            }}
            className=""
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="princessBride1880"
          />
        </div>
        <input
          id="submit-input"
          style={{
            width: "40%",
            alignSelf: "flex-end",
            marginTop: "1em",
            backgroundColor: "#075985",
            borderRadius: "20px",
            color: "white",
            borderRadius: "0.75rem",
          }}
          className=""
          type="submit"
          value="submit ➜"
        />
      </form>
    </div>
  );
}
