import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import notReady from "../../assets/assets/not-ready.svg"


interface Person {
  name: string;
  biography: string;
  birthday: string;
  deathday: string | null;
  place_of_birth: string;
  profile_path: string | null;
  known_for_department: string;
}

const PersonDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/person/${id}?api_key=db826f7a175bf94727529d5fd50d74f0`
        );
        const data = await res.json();
        setPerson(data);
      } catch (error) {
        console.error("Failed to fetch person details");
      }
    };

    if (id) fetchPerson();
  }, [id]);

  if (!person) return <div className="text-white p-4">Loading...</div>;

  return (
    <div className="min-h-screen p-6 bg-black text-white">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={
            person.profile_path
              ? `https://image.tmdb.org/t/p/w300${person.profile_path}` 
              : notReady
          }
          alt={person.name}
          className="w-[300px] rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{person.name}</h1>
          <p className="text-gray-400 mb-2">
            {person.known_for_department} • {person.birthday}
            {person.deathday && ` - ${person.deathday}`}
          </p>
          <p className="text-gray-400 mb-2">Born in {person.place_of_birth}</p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Biography</h2>
          <p className="text-gray-300 whitespace-pre-line">
            {person.biography || "No biography available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
