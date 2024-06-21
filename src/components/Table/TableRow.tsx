
import { User } from '@/@types';

type TableRowProps = {
  user: User;
  hoveredRow: string | null;
  onMouseEnter: (userId: string) => void;
  onMouseLeave: () => void;
  openModal: (user: User) => void;
};

export default function TableRow({ user, hoveredRow, onMouseEnter, onMouseLeave, openModal }: TableRowProps) {
  return (
    <tr
      className={`border-b text-center relative ${hoveredRow === user.id ? 'bg-gray-100' : ''}`}
      onMouseEnter={() => onMouseEnter(user.id)}
      onMouseLeave={onMouseLeave}
    >
      <td className="p-4 border-b border-gray-300">{user.username}</td>
      <td className="p-4 border-b border-gray-300">{user.name}</td>
      <td className="p-4 border-b border-gray-300">{user.email}</td>
      <td className="p-4 border-b border-gray-300">{user.city}</td>
      <td className="p-4 border-b border-gray-300">{user.weekDays}</td>
      <td className="p-4 border-b border-gray-300">{user.posts ? user.posts.length : 0}</td>
      <td className="p-4 border-b border-gray-300">{user.albums ? user.albums.length : 0}</td>
      {hoveredRow === user.id && (
        <td
          className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
          onClick={() => openModal(user)}
        >
          🗑️
        </td>
      )}
    </tr>
  );
};
