import SocialMediaIcon from "../SocialMediaIcon"

function Footer() {
    const sections = [
        {href: "about_me", text: "About Me", key: 1},
        {href: "hard_skills", text: "Hard Skills", key: 2},
        {href: "projects", text: "Projects", key: 3},
        {href: "contacts", text: "Contacts", key: 4},
        {href: "cv", text: "Resume", key: 5}
    ]

    const menu = sections.map(section =>
        <a href={section.href} key={section.key}>{section.text}</a>
    )

    const social = [
        {link: "https://linkedin.com/in/frcelipe7", key: 1, content: <> <div className="icon"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="7.025 7.025 497.951 497.95" id="linkedin"> <linearGradient id="a" x1="-974.482" x2="-622.378" y1="1306.773" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)" gradientUnits="userSpaceOnUse"> <stop offset="0" stopColor="#2489be"></stop> <stop offset="1" stopColor="#0575b3"></stop> </linearGradient> <path fill="url(#a)" d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"></path> </svg> </div> <p>@frcelipe7</p> </>},
        {link: "https://github.com/frcelipe7/", key: 2, content: <> <div className="icon"> <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 16 16" id="github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"/></svg> </div> <p>@frcelipe7</p> </>},
        {link: "mailto:feliperaphaelpara@gmail.com", key: 3, content: <> <div className="icon"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="gmail"><path fill="#ea4435" d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"></path><path fill="#00ac47" d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" transform="rotate(180 26.5 16)"></path><path fill="#ffba00" d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"></path><path fill="#4285f4" d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"></path><path fill="#c52528" d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"></path></svg> </div> <p>feliperaphaelpara@gmail.com</p> </>},
    ]
    
    return  (
        <footer>
            <div className="logo">
                FELIPE <br/> RAPHAEL <br/> <span>WEB DEV</span>
            </div>

            <div className="menu">
                <h4>Menu</h4>

                {menu}
            </div>

            <ul className="social_media">
                <h2>Contacts</h2>

                <li>
                    <SocialMediaIcon link={social[0].link} content={social[0].content} key={social[0].key} />
                    <SocialMediaIcon link={social[1].link} content={social[1].content} key={social[1].key} />
                    <SocialMediaIcon link={social[2].link} content={social[2].content} key={social[2].key} />
                </li>
            </ul>

            <div className="buttons">
                <h4>Entre em contato comigo!</h4>

                <a href="#contacts">Entrar em contato</a>
                <a download href="assets/cv/cv_dev_felipe.pdf" className="download_cv">
                    <span className="material-symbols-outlined">download</span>
                    <p className="description_section">Baixar currículo</p>
                </a>
            </div>

            <div className="references">
                <br/>
                <p>Desenvolvido utilizando <span>HTML, SASS, Git e GitHub</span></p>
                <p>
                    Icons by 
                    <a target="_blank" href="https://icons8.com/">icons8.com</a> and 
                    <a href="https://iconscout.com/contributors/font-awesome" className="text-underline font-size-sm" target="_blank">Font Awesome</a>,
                    <a href="https://iconscout.com/contributors/icon-mafia" className="text-underline font-size-sm" target="_blank">Icon Mafia</a>, 
                    <a href="https://iconscout.com/contributors/oviyan" className="text-underline font-size-sm">Amoghdesign</a> on <a href="https://iconscout.com" className="text-underline font-size-sm">IconScout</a>
                </p>
            </div>

            <div className="developed_by">
                <p>Desenvolvido por <a href="https://linkedin.com/in/frcelipe7">frcelipe7</a></p>
            </div>
        </footer>
    );
}

export default Footer;