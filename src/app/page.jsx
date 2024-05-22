/* eslint-disable react/prop-types */
export const metadata = {
  title: 'My Page Title',
};

export default function Page({ params: { locale } }) {
  console.log(locale);
  return (
    <div>
      <h1>{metadata.title}</h1>
      <h2>
        locale:
        {locale}
      </h2>
    </div>
  );
}
