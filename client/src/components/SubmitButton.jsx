/* eslint-disable react/prop-types */
export default function SubmitButton({
    type = 'button',
    children,
}) {
    return (
        <button
            
            type={type}
        >
            {children}
        </button>
    );
}
