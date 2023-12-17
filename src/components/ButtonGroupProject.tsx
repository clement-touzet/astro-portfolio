import React from "react";

type Props = {
  codeHref: string;
  demoHref: string;
};

const ButtonGroupProject = ({ codeHref, demoHref }: Props) => {
  if (codeHref == "" && demoHref == "") return <></>;

  return (
    <div className="flex gap-4 mt-8 flex-wrap">
      {demoHref != "" ? (
        <a
          href={demoHref}
          type="button"
          target="_blanck"
          aria-label="demo"
          className="font-semibold rounded border-[1px] text-white bg-black border-gray-300 px-8 py-2 cursor-pointer"
        >
          demo
        </a>
      ) : null}

      {codeHref != "" ? (
        <a
          href={codeHref}
          target="_blank"
          type="button"
          aria-label="code"
          className="font-semibold rounded border-[1px] text-black border-black px-8 py-2 cursor-pointer"
        >
          code
        </a>
      ) : null}
    </div>
  );
};

export default ButtonGroupProject;
