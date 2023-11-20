import { ButtonHTMLAttributes } from "react";
import cx from 'classnames';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
function Button({className, ...props}: IButton) {
  return <button className={cx("py-2 px-4 rounded-lg text-sm font-medium",className)} {...props} />;
}
export default Button;
