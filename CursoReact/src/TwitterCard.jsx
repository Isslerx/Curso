import './App.css'
export function TwitterCard({userName, name, isFollowing}) {
    return(
    <article>
            <header>
                <img alt="Avatar" src={'https://unavatar.io/${userName}'} />
            <div>
                <strong> {name} </strong>
                <span> @{userName} </span>
            </div>
            </header>

            <aside>
                <button>
                    Follow
                </button>
            </aside>
        </article>
    )
}
