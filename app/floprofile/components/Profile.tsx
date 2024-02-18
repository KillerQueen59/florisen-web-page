import Image from "next/image";

export const Profile = () => {
  return (
    <div className="container flex mx-auto">
      <Image
        src="/flora-picture.png"
        alt="flora-picture"
        width={275}
        height={400}
        className="mx-auto"
      />
      <div className="grid grid-cols-2 gap-x-16 gap-y-4 w-1/2 mx-auto mt-8">
        <h1
          className="text-2xl font-bold text-left"
          style={{
            color: "#074E6A",
          }}
        >
          Nama
        </h1>
        <h1
          className="text-2xl font-bold text-left"
          style={{
            color: "#074E6A",
          }}
        >
          Flora Shafiqa Riyadi
        </h1>
        <h1
          className="text-2xl font-bold text-left"
          style={{
            color: "#074E6A",
          }}
        >
          Tanggal Lahir
        </h1>
        <h1
          className="text-2xl font-bold text-left"
          style={{
            color: "#074E6A",
          }}
        >
          4 April 2005
        </h1>
        <h1
          className="text-2xl font-bold text-left"
          style={{
            color: "#074E6A",
          }}
        >
          Golongan Darah
        </h1>
        <h1
          className="text-2xl font-bold text-left"
          style={{
            color: "#074E6A",
          }}
        >
          B
        </h1>
        <h1
          className="text-2xl font-bold text-left"
          style={{
            color: "#074E6A",
          }}
        >
          Horoskop
        </h1>
        <h1
          className="text-2xl font-bold text-left"
          style={{
            color: "#074E6A",
          }}
        >
          Aries
        </h1>
        <h1
          className="text-2xl font-bold text-left"
          style={{
            color: "#074E6A",
          }}
        >
          Tinggi Badan
        </h1>
        <h1
          className="text-2xl font-bold text-left"
          style={{
            color: "#074E6A",
          }}
        >
          149cm
        </h1>
      </div>
    </div>
  );
};
