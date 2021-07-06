interface RepositoryItemProps {
	repository: {
		name: string;
		description: string;
		html_url: string;
	}
}

export function RepositoryItem(props: RepositoryItemProps) {
	return (
	<li>
		<strong>{props.repository?.name ?? 'Name Default'}</strong>
		<p>{props.repository.description ?? 'Description Default'}</p>

		<a href={props.repository?.html_url ?? '#'}>
			Access repository
		</a>
	</li>
	);
}