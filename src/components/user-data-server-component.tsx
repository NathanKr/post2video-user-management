import {
  getPrivateMetadata,
  getUser,
  setPrivateMetadata,
} from "@/logic/clerk-user-data-utils";
import { IPrivateUserData } from "@/types/types";

export default async function UserDataServerComponent() {
  const user = await getUser();

  if (!user) return <p>user is empty</p>;

  const userData: IPrivateUserData = {
    creditLeftCents: 10,
    numYoutubeVideoUploadLeft: 10,
  };
  await setPrivateMetadata(userData);
  const privateMetadata = await getPrivateMetadata();

  return (
    <div>
      <p>email : {user.emailAddresses[0].emailAddress}</p>
      <p>
        privateMetadata :{" "}
        {privateMetadata
          ? `creditLeftCents : ${privateMetadata.creditLeftCents} , numYoutubeVideoUploadLeft : ${privateMetadata.numYoutubeVideoUploadLeft}`
          : "N / A"}
      </p>
    </div>
  );
}
