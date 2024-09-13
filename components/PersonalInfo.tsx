import Image from 'next/image';

const PersonalInfo = () => {
    return (
        <section id="personal-info" className="personal-info">
        <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={100}
            height={100}
            className="profile-pic"
        />
        <h1>Shaahrozz Ali Khan</h1>
        <p>Email: shaahrozzalikhan@gmail.com | Phone: 0345-8228141</p>
        <p>
            LinkedIn: <a href="https://www.linkedin.com/in/shaahrozz-ali-khan">linkedin.com/in/shaahrozz-ali-khan</a>
        </p>
        <u><h2>Professional Summary</h2></u>
        <p>A highly skilled and detail-oriented Software Engineer with [X] years of experience in designing, developing, and deploying web and mobile applications. Proficient in a wide range of technologies, including JavaScript, TypeScript, React, and Node.js, with a strong focus on writing clean, maintainable code. Adept at problem-solving, optimizing performance, and collaborating with cross-functional teams to deliver high-quality software solutions. Passionate about continuous learning and leveraging new technologies to drive innovation and efficiency in software development.</p>
        </section>
    );
};

export default PersonalInfo;
