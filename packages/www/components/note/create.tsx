import { useState } from "react";
import NoteForm from "../form/note";

export default ({ owner, updateNote }) => {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<>
			<button onClick={() => setIsCollapsed(!isCollapsed)}>
				{isCollapsed ? "Create Note" : "Close Form"}
			</button>
			{isCollapsed ? (
				""
			) : (
				<div>
					<NoteForm
						owner={owner}
						setIsCollapsed={setIsCollapsed}
						updateNote={updateNote}
					/>
				</div>
			)}
		</>
	);
};
