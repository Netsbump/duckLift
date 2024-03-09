/* eslint-disable @typescript-eslint/no-unsafe-call */
import { describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Login } from "./Index";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@contexts/Authentification";

vi.mock("react-router-dom", async () => {
  const actualModule = await vi.importActual("react-router-dom");
  return {
    ...actualModule,
    useNavigate: vi.fn(),
  };
});

describe("Login Page", () => {
  it("renders the email and password input fields and login button", () => {
    //ARRANGE
    render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>,
    );

    //ACT
    const emailInput = screen.getByPlaceholderText("johndoe@example.co");
    const passwordInput = screen.getByPlaceholderText("●●●●●●");
    const loginButton = screen.getByRole("button", { name: "Se connecter" });
    //EXPECT
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
});
