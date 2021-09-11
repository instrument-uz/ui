import Step from "@/#/auth/steps/Step";
import HF from "@/components/Layout/HF";

function Steps() {
  return (
    <HF>
      <div className="steps flex | pt-12">
        <Step title={`Регистрация`} completed={false} active={true} order={1} />

        <Step
          title={`Подтверждение`}
          completed={false}
          active={false}
          order={2}
        />
        <Step title={`Пароль`} completed={false} active={false} order={3} />
        <Step title={`Завершение`} completed={false} active={false} order={4} />
      </div>

      <div className="body"></div>
    </HF>
  );
}

export default Steps;
