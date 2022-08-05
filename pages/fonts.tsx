import { Divider } from "@mui/material"
import type { NextPage } from "next"
import { Text } from "../components/Text"

const Fonts: NextPage = () => {
  return (
    <div>
      <p>Copernicus</p>
      <Text font="heading" variant="h1" padding={2}>
        This is my Text
      </Text>
      <Text font="heading" variant="h2" padding={2}>
        This is my Text
      </Text>
      <Text font="heading" variant="h3" padding={2}>
        This is my Text
      </Text>
      <Text font="heading" variant="subheading1" padding={2}>
        This is my Text
      </Text>
      <Text font="heading" variant="subheading2" padding={2}>
        This is my Text
      </Text>
      <Text font="heading" variant="body1" padding={2}>
        This is my Text
      </Text>
      <Text font="heading" variant="body2" padding={2}>
        This is my Text
      </Text>
      <Text font="heading" variant="legal" padding={2}>
        This is my Text
      </Text>

      <Divider />

      <p>DM Sans</p>
      <Text font="body" variant="h1" padding={2}>
        This is my Text
      </Text>
      <Text font="body" variant="h2" padding={2}>
        This is my Text
      </Text>
      <Text font="body" variant="h3" padding={2}>
        This is my Text
      </Text>
      <Text font="body" variant="subheading1" padding={2}>
        This is my Text
      </Text>
      <Text font="body" variant="subheading2" padding={2}>
        This is my Text
      </Text>
      <Text font="body" variant="body1" padding={2}>
        This is my Text
      </Text>
      <Text font="body" variant="body2" padding={2}>
        This is my Text
      </Text>
      <Text font="body" variant="legal" padding={2}>
        This is my Text
      </Text>
    </div>
  )
}

export default Fonts