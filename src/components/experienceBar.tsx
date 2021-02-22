export function ExperienceBar(){
    return(
        <header className="experience-bar">
            <span> 0 xp </span>
            <div>
                <div style={{width: '5 0%'}}></div>
                <span className="current-experience" style={{ left: '50%' }}>
                    300xp
                </span>
            </div>
            <span> 600 xp </span>
        </header>
    )
}