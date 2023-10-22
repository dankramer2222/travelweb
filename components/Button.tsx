import Image from "next/image";

// Определение типов пропсов для компонента Button
type ButtonProps = {
  type: "button" | "submit"; // Должно быть в двойных кавычках, не в одинарных
  title: string; // Должно быть без кавычек
  icon?: string; // Должно быть без кавычек
  variant:string;
};

// Компонент Button
const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type} // Исправлено на использование переменной type
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
