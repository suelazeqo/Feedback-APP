import Card from "../component/shared/Card";
import {Link} from "react-router-dom";

const AboutPage = () => {
    return <Card>
        <div className="about">
            <h1>This is a Project</h1>
            <p>This is a React App to leave feedback for a product or service</p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to='/'>Back To Home</Link>
            </p>
        </div>
    </Card>
}

export default AboutPage;
