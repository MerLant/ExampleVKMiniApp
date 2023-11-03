import React, {MouseEventHandler, useState} from 'react';

import { Panel, PanelHeader, Header, Button, Group, Div } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';


interface Props {
	id: string;
	go: MouseEventHandler<HTMLElement>;
	fetchedUser?: UserInfo;
}

const Home: React.FC<Props> = ({ id, go }) => {
	const [Kill, setKill] = useState(false)

	return (
		<Panel id={id}>
			<PanelHeader>Example</PanelHeader>

			<Group header={<Header mode="secondary">Navigation Example</Header>}>
				<Div>
					<Button stretched size="l" mode="secondary" onClick={() => setKill(!Kill)} data-to="persik">
						{Kill ? "Persik, DIE" : "Show me the Persik, please"}
					</Button>
				</Div>
			</Group>
		</Panel>
	);
}

export default Home;
