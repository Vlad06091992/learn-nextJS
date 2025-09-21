import { FC } from "react";

interface ProfilePageProps {
    params: {
        id: string;
    };
}

debugger

const ProfilePage: FC<ProfilePageProps> = ({ params }) => {
    return (
        <div>
            <h1>Профиль пользователя</h1>
            <p>ID: {params.id}</p>
        </div>
    );
};

export default ProfilePage;