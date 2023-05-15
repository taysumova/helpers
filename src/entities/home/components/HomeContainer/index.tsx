import { Input } from "@components";
import {
  HomeContainerStyled,
  InputContainer,
  InputBlock,
  TagsContainer,
  Tag,
} from "./styled";
import { useState } from "@core/hooks";
import { convertStringToColor } from "@utils";

export const HomeContainer = () => {
  const [tags, setTags] = useState(["Public", "Dev", "Design"]);
  const [newTag, setNewTag] = useState("");

  const [hashBase, setHashBase] = useState(8);
  const [opacity, setOpacity] = useState(0.3);

  const handleAddNewTag = () => {
    setTags([...tags, newTag]);
    setNewTag("");
  };

  const handleOnEnter = (event: any) => {
    if (event.keyCode === 13) {
      handleAddNewTag();
    }
  };

  return (
    <HomeContainerStyled>
      <InputContainer>
        <InputBlock>
          <b>Hash base</b>
          <Input
            type="number"
            value={hashBase}
            onChange={(val: string) => setHashBase(+val)}
          />
        </InputBlock>

        <InputBlock>
          <b>Opacity</b>
          <Input
            type="number"
            value={opacity}
            onChange={(val: string) => setOpacity(+val)}
          />
        </InputBlock>
      </InputContainer>

      <TagsContainer>
        {tags.map((label: string, labelIndex: number) => (
          <Tag
            key={labelIndex}
            style={{
              backgroundColor: convertStringToColor(label, opacity, hashBase),
            }}
          >
            {label}
          </Tag>
        ))}
      </TagsContainer>

      <div>
        <input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyDown={handleOnEnter}
        />

        <button onClick={() => handleAddNewTag()}>Add</button>
      </div>
    </HomeContainerStyled>
  );
};
