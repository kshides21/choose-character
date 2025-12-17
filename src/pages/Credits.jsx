import "./Loading.css";

export default function Credits( {onConfirm} ) {
    return (
        <div className="credits-screen">
            <h1 className="credits-title">Credits</h1>
            <h3 className="credits-text">Game Design: Katie Shideler</h3>
            <h3 className="credits-text">Programming: Katie Shideler</h3>
            <h3 className="credits-text">Art: Google Gemini</h3>
            <h2 className="credits-subtitle">Come back soon, Ashfell is waiting for you!</h2>
            <button className="credits-btn confirm-btn" onClick={onConfirm}>
                Back to Title
            </button>
        </div>
    );
}