interface Props {
  description: any;
  developer: string;
}

export const TestimonialItem = ({ description, developer }: Props) => {
  return (
    <div className="relative border p-5 lg:p-10 bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md  flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="32"
        fill="none"
        viewBox="0 0 36 32"
        className="absolute -top-2 -left-4"
      >
        <path
          fill="#4DC3BA"
          d="M13.427.024l-5.632 23.68L6.77 18.2c2.048 0 3.712.64 4.991 1.92 1.28 1.195 1.92 2.816 1.92 4.864s-.64 3.712-1.92 4.992c-1.28 1.28-2.858 1.92-4.736 1.92-2.047 0-3.712-.64-4.992-1.92C.84 28.611.242 26.946.242 24.984c0-.768.043-1.45.128-2.048.086-.597.256-1.323.512-2.176.257-.853.598-1.877 1.025-3.072L7.282.024h6.145zm21.76 0l-5.632 23.68L28.53 18.2c2.047 0 3.712.64 4.992 1.92 1.28 1.195 1.92 2.816 1.92 4.864s-.64 3.712-1.92 4.992c-1.28 1.28-2.86 1.92-4.737 1.92-2.048 0-3.712-.64-4.992-1.92-1.194-1.365-1.791-3.03-1.791-4.992 0-.768.042-1.45.128-2.048.085-.597.256-1.323.511-2.176.256-.853.598-1.877 1.024-3.072L29.043.024h6.144z"
        ></path>
      </svg>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="font-monserat"
      />
      <p className="font-semibold font-monserat text-right mt-7">{developer}</p>
    </div>
  );
};
