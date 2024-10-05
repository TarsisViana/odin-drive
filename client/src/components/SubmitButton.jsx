/* eslint-disable react/prop-types */
export default function SubmitButton({
    color = 'white',
    type = 'button',
    children,
}) {
    return (
        <button
            style={{ backgroundColor: color }}
            type={type}
        >
            {children}
        </button>
    );
}
