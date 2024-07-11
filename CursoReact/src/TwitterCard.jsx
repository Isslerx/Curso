import './App.css'
import { useState } from 'react'

export function TwitterCard({userName, name}) {
    const [isFollowing, setIsFollowing] = useState(false) 
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    


    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
    <article>
            <header>
                <img alt="Avatar" src={`https://unavatar.io/${userName}`} />
            <div>
                <strong> {name} </strong>
                <span> @{userName} </span>
            </div>
            </header>

            <aside>
                <button onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}
