export const Th = ({ children }) => (
  <th className="px-6 py-2 border border-gray-700 text-xl">{children}</th>
);

export const Td = ({ children, colSpan }) => (
  <td className="px-6 py-2 border border-gray-700" colSpan={colSpan}>{children}</td>
);
