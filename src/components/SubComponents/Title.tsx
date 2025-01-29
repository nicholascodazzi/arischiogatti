export default function Title({ children }) {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <p className="mt-4 text-3xl font-bold text-violet-700 md:text-4xl">
          {children}
        </p>
      </div>
    </div>
  );
}
