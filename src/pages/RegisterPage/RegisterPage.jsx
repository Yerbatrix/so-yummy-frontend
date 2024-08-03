import { ToastContainer } from "react-toastify";
import AuthForm from "../../components/AuthForm/AuthForm";
import imageDesktop from "../../images/register/signin-image-desktop.png";
import imageDesktop2x from "../../images/register/signin-image-desktop@2x.png";
import imageDesktop3x from "../../images/register/signin-image-desktop@3x.png";
import imageMobile from "../../images/register/signin-image-mobile.png";
import imageMobile2x from "../../images/register/signin-image-mobile@2x.png";
import imageMobile3x from "../../images/register/signin-image-mobile@3x.png";
import imageTablet from "../../images/register/signin-image-tablet.png";
import imageTablet2x from "../../images/register/signin-image-tablet@2x.png";
import imageTablet3x from "../../images/register/signin-image-tablet@3x.png";
import { RegisterContainer, Section } from "./RegisterPage.styled";
const RegisterPage = () => {
  return (
    <>
      <Section>
        <RegisterContainer>
          <img
            src={imageMobile}
            // Ten kod wyświetla responsywny obraz o różnych rozmiarach i źródłach. Obraz ma różne wersje dla różnych urządzeń (telefon komórkowy, tablet, komputer stacjonarny) i rozdzielczości ekranu. Używa atrybutów srcset i sizes, aby wybrać najlepszą opcję obrazu na podstawie rozmiaru okna przeglądarki
            srcSet={`${imageMobile} 285w, ${imageMobile2x} 570w, ${imageMobile3x} 855w,
            ${imageTablet} 409w, ${imageTablet2x} 818w, ${imageTablet3x} 1227w, ${imageDesktop}    532w, ${imageDesktop2x} 1064w, ${imageDesktop3x} 1596w
            `}
            sizes="(min-width: 1280px) 532px, (min-width: 768px) 409px, (min-width: 320px) 285px, 100vw"
            alt="Register hero"
          />
          <AuthForm />
        </RegisterContainer>
        {/* ToastContainer jest kontenerem, który renderuje powiadomienia typu “toast”. To miejsce, w którym wyświetlane są komunikaty dla użytkownika. */}
        <ToastContainer />
      </Section>
    </>
  );
};

export default RegisterPage;
