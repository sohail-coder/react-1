import React, { FC, ReactElement } from 'react';

type ChildProps = {
    name?: string,
    comment?: string,
  }
  interface Props {
    comments?:ChildProps[]
  }
  const List: FC<ChildProps> = (
    {name,comment}
  ): ReactElement => {
    
    return (
      <div>
        {name}
      {comment}
      
      </div>
    );
  }

  export default List;
