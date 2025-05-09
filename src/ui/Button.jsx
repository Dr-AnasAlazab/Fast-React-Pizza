import { Link } from 'react-router-dom'

function Button({ children, disabled, to, type, onClick }) {
    const base = ` focus:ouline-none
         focusLring0ellow-300 focus:rign-offset-2 
        inline-block rounded-full 
        bg-yellow-400 px-4 py-3 font-bold
         uppercase tracking-wide text-stone-800 
         transition-colors
         duration-300 hover:bg-yellow-300 focus:ring
          disabled:cursor-not-allowed`

    const style = {
        primary: base + `sm:px-4 sm:py-2 px-4 py-3 `,
        small: base + `md:px-5 md:py-2.5 px-3 py-1.5 text-xs `,
        round: base + `px-2.5 py-1 md:px-3.5 md:py-2 text-sm space-1`,
        secondary: ` focus:ouline-none
        
         focus:ring-stone-300 focus:rign-offset-2 
         text-stone-400
         border-2
         border-stone-300
        inline-block rounded-full 
         sm:px-4 sm:py-2 px-4 py-3 font-semibold
         uppercase tracking-wide hover:text-stone-800 
         transition-colors
         duration-300 hover:bg-stone-300 focus:ring
          disabled:cursor-not-allowed`,
    }
    if (to)
        return (
            <Link className={style[type]} to={to}>
                {children}
            </Link>
        )

    if (onClick)
        return (
            <button
                onClick={onClick}
                className={style[type]}
                disabled={disabled}
            >
                {children}
            </button>
        )

    return (
        <button className={style[type]} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
